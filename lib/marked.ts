import marked from "marked";

marked.setOptions({
  breaks: true,
  headerIds: false
})

export default marked;