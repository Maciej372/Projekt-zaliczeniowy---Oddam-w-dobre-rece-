import decoration from "/src/assets/Decoration.svg";
import HomeOrganizationsView from "./HomeOrganizationsView";
import organizationsLists from "./OrganizationsLists";

const HomeOrganizations = () => {
  return (
    <section id="HomeOrganizations" className="homeOrganizations">
      <h2>Komu pomagamy?</h2>
      <img src={decoration} alt="decoration" />
      <HomeOrganizationsView organizationsLists={organizationsLists} />
    </section>
  );
};

export default HomeOrganizations;
