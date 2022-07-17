import React, { useState, useEffect, useCallback, useRef } from "react";

//import Tags from './tagify/react.tagify'
import Tags from "@yaireo/tagify/dist/react.tagify";
import "@yaireo/tagify/dist/tagify.css";

/////////////////////////////////////////////////

// Tagify settings object
const baseTagifySettings = {
  blacklist: ["xxx", "yyy", "zzz"],
  maxTags: 6,
  //backspace: "edit",
  placeholder: "type something",
  dropdown: {
    enabled: 0, // a;ways show suggestions dropdown
  },
};

// this is an example React component which implemenets Tagify within
// itself. This example is a bit elaborate, to demonstrate what's possible.
const CrazyTags = () => {
  const tagifyRef1 = useRef();

  // just a name I made up for allowing dynamic changes for tagify settings on this component
  const [tagifySettings, setTagifySettings] = useState([]);
  const [tagifyProps, setTagifyProps] = useState({});

  // on component mount
  useEffect(() => {
    setTagifyProps({ loading: true });

    getWhitelistFromServer(2000).then((response) => {
      setTagifyProps((lastProps) => ({
        ...lastProps,
        whitelist: response,
        showFilteredDropdown: "a",
        loading: false,
      }));
    });

    // simulate setting tags value via server request
    getValue(3000).then((response) =>
      setTagifyProps((lastProps) => ({ ...lastProps, defaultValue: response }))
    );

    // simulate state change where some tags were deleted
    setTimeout(
      () =>
        setTagifyProps((lastProps) => ({
          ...lastProps,
          defaultValue: ["abc"],
          showFilteredDropdown: false,
        })),
      5000
    );
  }, []);

  // merged tagify settings (static & dynamic)
  const settings = {
    ...baseTagifySettings,
    ...tagifySettings,
  };

  const onChange = useCallback((e) => {
    console.log("CHANGED:", e.detail.value);
  }, []);

  return (
    <>
      <Tags
        tagifyRef={tagifyRef1}
        settings={settings}
        defaultValue="a,b,c"
        autoFocus={false}
        {...tagifyProps}
        onChange={onChange}
        onEditInput={() => console.log("onEditInput")}
        onEditBeforeUpdate={() => console.log`onEditBeforeUpdate`}
        onEditUpdated={() => console.log("onEditUpdated")}
        onEditStart={() => console.log("onEditStart")}
        onEditKeydown={() => console.log("onEditKeydown")}
        onDropdownShow={() => console.log("onDropdownShow")}
        onDropdownHide={() => console.log("onDropdownHide")}
        onDropdownSelect={() => console.log("onDropdownSelect")}
        onDropdownScroll={() => console.log("onDropdownScroll")}
        onDropdownNoMatch={() => console.log("onDropdownNoMatch")}
        onDropdownUpdated={() => console.log("onDropdownUpdated")}
      />
    </>
  );
};

export default CrazyTags;

// do some ajax, get whitelist array of all allowed tags, then set it onto the State
// set "showDropdown" to some value, which will filter the dropdown by that value
const serverDelay = (func) => (duration) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(func());
    }, duration || 1000)
  );

const getWhitelistFromServer = serverDelay(() => [
  "aaa",
  "aaa1",
  "aaa2",
  "aaa3",
  "bbb1",
  "bbb2",
  "bbb3",
  "bbb4",
]);

const getValue = serverDelay(() => ["foo", "bar", "baz"]);
