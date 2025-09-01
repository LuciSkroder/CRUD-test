export default function CreatePage() {
  return (
    <main className="page">
      <h1>Creat New User</h1>
      <form action="">
        <label htmlFor="">Name</label>
        <input id="name" type="text" placeholder="Type a name" />
        <label htmlFor="titel">Titel</label>
        <input id="name" type="text" placeholder="Type a titel" />
        <label htmlFor="mail">Mail</label>
        <input id="name" type="text" placeholder="Type a mail" />
        <label htmlFor="mail">Image URL</label>
        <input type="url" placeholder="Paste image url" />
        <label htmlFor="image-preview">Name</label>
        <img
          id="image-preview"
          className="image-preview"
          src="{https://placehold.co/600x400?text=Paste+an+image+URL}"
          alt="Choose"
          onError={(e) =>
            (e.target.src =
              "https://placehold.co/600x400?text=Error+loading+image")
          }
        />
      </form>
    </main>
  );
}
