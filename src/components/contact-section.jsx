import { useState } from 'react';
import SectionTitle from './section-title';

function ContactSection() {
  const [form, setForm] = useState({ name: '', message: '' });
  const submit = (e) => {
    e.preventDefault();
    const emailSubject = encodeURIComponent(
      'Luis.best Contact Form: ' + form.name
    );
    const emailBody = encodeURIComponent(form.message);
    window.open(
      `mailto:hey@luis.best?subject=${emailSubject}&body=${emailBody}`
    );
  };

  return (
    <section>
      <SectionTitle id="contact" title="Contact" iconName="mail" />
      <form className="flex flex-col gap-5" onSubmit={submit}>
        <label className="form-control w-full max-w-lg">
          <div className="label">
            <span className="label-text">Your name</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </label>
        <label className="form-control w-full max-w-lg">
          <div className="label">
            <span className="label-text">Message</span>
          </div>
          <textarea
            rows={5}
            className="textarea textarea-bordered"
            placeholder="Write your message here..."
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>
        </label>
        <button
          type="submit"
          className="btn btn-primary uppercase w-full max-w-lg"
        >
          Send message
        </button>
      </form>
    </section>
  );
}

export default ContactSection;
