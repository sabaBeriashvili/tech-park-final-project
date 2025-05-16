import Image from "next/image";
import styles from "./page.module.css";
import SignOut from "@/components/SingOut/SingOut";
import Footer from "@/components/Footer/footer";
import ProfileBackround from "./profileBackground/ProfileBack";

const Profile = async () => {
  let profile;
  try {

    const data = await fetch("https://fakestoreapi.com/users/3");
    profile = await data.json();

    if (profile.message) {
      throw Error(profile.message);
    }
  } catch (error) {
    throw Error(error);
  }

  return (
    <div className={styles.container}>

        <Image
        src={profile.image}
        className={styles.image}
        alt="Profile Image"
        width={100}
        height={100}
      />
      
    <ProfileBackround className={"ProfileBackground"}/>
      
      <section className={styles.section}>
        <div className={styles.infoWrapper}>
          <p>Name: </p>
          <p>{profile.firstName}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p>Middle name: </p>
          <p>{profile.maidenName}</p>
        </div>
        <div className={styles.infoWrapper}>
          <p>last name: </p>
          <p>{profile.lastName}</p>
        </div>
      </section>
      <SignOut />
      <Footer className={styles.profileFooter}>

      </Footer>
    </div>
  );
};

export default Profile;
