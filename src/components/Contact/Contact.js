import classes from "./Contact.module.css";

const Contact = () => {
  const ContactInfo = [
    {
      name: "LinkedIn",
      info: "I post my project updates on linkedin. Connect with me for next project updates",
      linkName: "Profile Link",
      link: "http://linkedin.com/in/rohit-kumar-b9a525219",
    },
    {
      name: "Github",
      info: "For new updates.",
      linkName: "Repo Link",
      link: "https://github.com/RohitKumarSh98",
    },
    {
      name: "Mail",
      info: "Feel free to contact.",
      linkName: "Mail Link",
      link: "mailto: rohit16546@gmail.com",
    },
  ];

  return (
    <section className={classes.section}>
      <div className={classes.info}>
        <h1>Looking for my first energetic career opportunity</h1>
        {ContactInfo.map((item) => {
          return (
            <div className={classes.contactDetail}>
              <p>
                <span>{item.name}</span> : {item.info}
              </p>
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.linkName}
              </a>
            </div>
          );
        })}
        <p className={classes.phone}>
          Contact no. <span>7003343613</span>
        </p>
      </div>
      <div className={classes.image}>
        <img src="./contact.png" alt="Contacts Icons" />
      </div>
    </section>
  );
};

export default Contact;
