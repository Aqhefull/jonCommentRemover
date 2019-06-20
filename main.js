(() => {
  const fileInput = document.getElementById("fileInput");
  const submitFile = document.getElementById("submitFile");
  const resultBox = document.getElementById("resultBox");
  const fReader = new FileReader();

    const comment = () => new RegExp(`(?:${comment.line().source})|(?:${comment.block().source})`, "gms");
    comment.line = () => /(?:^|\s)\/\/(.+?)$/gms;
    comment.block = () => /\/\*(.*?)\*\//gms;

    const deleteComments = (fileText) => {
      let inputText = fileText;
      const commentsInText = fileText.match(comment());
      
      commentsInText.map((el, i) => {
        const newText = inputText.replace(el, "");
        inputText = newText;
      })

      resultBox.value = inputText;
      
    }

    submitFile.addEventListener("click", e => {
      e.preventDefault()
      if(fileInput.files[0]) {
        const { type } = fileInput.files[0];
        if (type === "text/javascript") {
          fReader.readAsText(fileInput.files[0]);
          fReader.onloadend = function(e) {
            deleteComments(e.target.result);
          };
        }
      }
    });
})()