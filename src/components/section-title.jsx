function SectionTitle({ title, iconName }) {
  return (
    <div className="my-10">
      <h2 className="inline-flex gap-3 items-center bg-base-100 border rounded-full py-2 px-10 uppercase text-sm">
        <ion-icon name={iconName}></ion-icon>
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;
