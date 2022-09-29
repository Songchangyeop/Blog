const Utterances = () => {
  return (
    <section
      ref={(elem) => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement('script');
        scriptElem.src = 'https://utteranc.es/client.js';
        scriptElem.async = true;
        scriptElem.setAttribute('repo', 'Songchangyeop/Blog');
        scriptElem.setAttribute('issue-term', 'title');
        scriptElem.setAttribute('theme', 'github-light');
        scriptElem.setAttribute('label', '💬');
        scriptElem.crossOrigin = 'anonymous';
        elem.appendChild(scriptElem);
      }}
    />
  );
};

export default Utterances;
