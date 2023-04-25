import React, { FormEvent, useEffect, useRef, useState } from "react";
import "./app.scss";
import { FIRSTRUN, listData } from "./components/list";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ListNode from "./utils/list-node";

const data = listData;

type fType = number | string | number[] | boolean | null | ListNode;

type listPropsType = {
  f: (value: any) => fType;
  f_view?: unknown;
  id: string;
  name: string;
  link: string;
  initial: string | number | string[] | number[];
  initialType?: string;
};

function App() {
  const [value, setValue] = useState<listPropsType["initial"] | null>(null);
  const [text, setText] = useState<string | null>(null);
  const [link, setLink] = useState<string | null>(null);
  const [func, setFunc] = useState<listPropsType["f"] | null>(null);
  const [result, setResult] = useState<fType>(null);
  const [activeLink, setActiveLink] = useState<Record<string, string>>({});
  const [type, setType] = useState<string | null>(null);

  const valueRef = useRef<HTMLTextAreaElement>(null);

  const hundleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (valueRef.current && valueRef.current.value) {
      let finalValue: string | string[] | number | number[] =
        valueRef.current.value;
      if (type) {
        if (type === "array") finalValue = finalValue.split(",");
        else if (type === "arrayNumber")
          finalValue = finalValue
            .split(",")
            .map((el: string | number) => (el = +el));
        else if (type === "number") finalValue = +finalValue;
      }
      setValue(finalValue);
    }
  };

  const setStates = (props: listPropsType) => {
    const { initial, link, f, id, initialType, f_view } = props;
    f_view ? setText(f_view.toString()) : setText(f.toString());
    setFunc(() => f);
    setValue(initial);
    setLink(link);
    valueRef.current!.value = initial.toString();
    setActiveLink({ [id]: "list__link_active" });
    initialType ? setType(initialType) : setType(null);
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
      let result = func(value);
      if (result instanceof ListNode) {
        let tmp = result;
        result = [];
        while (tmp) {
          result.push(tmp.val);
          tmp = tmp.next;
        }
      }
      if (typeof result === "object" && !(result instanceof ListNode))
        result = result ? `[${result.join(",")}]` : "null";
      if (typeof result === "boolean")
        result ? (result = "true") : (result = "false");
      setResult(result);
    }
  }, [func, value]);

  useEffect(() => {
    if (data) {
      const firstElement = data.find((el) => el.id === FIRSTRUN.toString());
      if (firstElement) setStates(firstElement);
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
                <SyntaxHighlighter language="javascript" style={a11yDark}>
                  {text as string}
                </SyntaxHighlighter>
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
                  Result: <span>{result as string}</span>
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
