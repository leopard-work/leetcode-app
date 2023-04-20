import React, { FormEvent, useEffect, useRef, useState } from "react";
import "./app.scss";
import { FIRSTRUN, listData } from "./components/list";

const data = listData;

type listPropsType = {
  f: (value: any) => void;
  id: string;
  name: string;
  link: string;
  initial: string | number | string[] | number[];
  initialType?: string
};

function App() {
  const [value, setValue] = useState<
    string | number | string[] | number[] | null
  >(null);
  const [text, setText] = useState<string | null>(null);
  const [link, setLink] = useState<string | null>(null);
  const [func, setFunc] = useState<any>(null);
  const [result, setResult] = useState(null);
  const [activeLink, setActiveLink] = useState<Record<string, string>>({})
  const [type, setType] = useState<string | null>(null);

  const valueRef = useRef<HTMLTextAreaElement>(null);

  const hundleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (valueRef.current && valueRef.current.value) {
      let finalValue: string | string[] = valueRef.current.value;
      if (type && type === 'array') finalValue = finalValue.split(',');
      setValue(finalValue);
    }
  };

  const setStates = (props: listPropsType) => {
    const { initial, link, f, id, initialType } = props;
    setText(f.toString());
    setFunc(() => f);
    setValue(initial);
    setLink(link);
    valueRef.current!.value = initial.toString();
    setActiveLink({[id]: 'list__link_active'})
    initialType ? setType(initialType) : setType(null)
  };

  const listTpl = (props: listPropsType) => {
    const { id, name } = props;

    const handleLinkClick = (
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
      event.preventDefault();
      event.stopPropagation();
      setStates(props);
    };

    return (
      <li className="list__block" key={id}>
        <a
          href="/"
          className={`list__link ${activeLink[id]}`}
          onClick={(event) => handleLinkClick(event)}
        >
          {name}
        </a>
      </li>
    );
  };

  useEffect(() => {
    if (func) {
      setResult(func(value));
    }
  }, [func, value]);

  useEffect(() => {
    if (data) {
      setStates(data[FIRSTRUN]);
    }
  }, []);

  return (
    <div className="container">
      <div className="app">
        <div className="wrapper">
          <ul className="list">{data.map((props) => listTpl(props))}</ul>
          <div className="content">
            <div className="content__wrapper">
              <div className="content__title">
                <a
                  className="list__link"
                  href={link ? link : "/"}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in LeetCode
                </a>
              </div>
              <div className="content__code">
                <pre>{text}</pre>
              </div>
              <div className="run">
                <form
                  className="run__form"
                  onSubmit={(event) => hundleFormSubmit(event)}
                >
                  <textarea
                    ref={valueRef}
                    className="run__textarea"
                    placeholder="Initial data..."
                  />
                  <button type="submit" className="run__button">
                    Run
                  </button>
                </form>
                <div className="run__result">
                  Result: <span>{result}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <a href="https://github.com/leopard-work" className="list__link">
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
