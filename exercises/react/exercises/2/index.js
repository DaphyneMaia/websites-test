//const header = ReactDOM.createRoot(document.getElementById('header'))
//const main = ReactDOM.createRoot(document.getElementById('main'))
const root = ReactDOM.createRoot(document.getElementById('root'))

function HeaderContent () {
   return (
    <header><h1>Corporate strategy</h1></header>
   )
}

function MainContent () {
   return (
    <main><section><p>Leverage agile frameworks to provide a robust synopsis for high level overviews.
    Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p></section></main>
   )
}

function MainContent () {
   return (
      <div>
	<ImgContent />
         <main><section><p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p></section></main>
      </div>
    )
}

function ImgContent () {
   return (
      <figure><img src="https://lunevedy.netlify.app/ui/assets/img/1024x618-cafe.jpg" alt="sample image"/></figure>
   )
}

root.render(
    <span>
        <HeaderContent />
        <MainContent />
    </span>
)

