export const Quote = ({ author, quote }) => {

  return (
    <blockquote className="blockquote text-end">
      <p className="mb-10">
        { quote }
      </p>
      <footer className="blockquote-footer">
        { author }
      </footer>
    </blockquote>
  )
}