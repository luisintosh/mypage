function SectionTitle({ title, id, children }) {
  return (
    <div className="my-10">
      <h2
        id={id}
        className="inline-flex gap-3 items-center border rounded-full py-2 px-10 uppercase text-sm"
      >
        {children}
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;
