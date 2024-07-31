import React, { useState } from "react";
import Button from "./Button";
import FoundationCore from "./FoundationCore";
import Pagination from "./Pagiantion";
import "/src/scss/styles/_HomeOrganizationsView.scss";

const usePaginate = (items, itemsPerPage = 3) => {
  const [currentPage, setCurrentPage] = useState(1);
  const lastFoundationIndex = currentPage * itemsPerPage;
  const firstFoundationIndex = lastFoundationIndex - itemsPerPage;

  return {
    currentPage,
    setCurrentPage,
    itemsPerPage,
    firstFoundationIndex,
    lastFoundationIndex,
    currentItems: items.slice(firstFoundationIndex, lastFoundationIndex),
  };
};

const HomeOrganizationView = ({ organizationsLists }) => {
  const [foundationsType, setFoundationType] = useState(
    organizationsLists.foundations
  );

  const itemsPerPage = 3;
  const {
    currentPage,
    setCurrentPage,
    firstFoundationIndex,
    lastFoundationIndex,
    currentItems,
  } = usePaginate(foundationsType.list, itemsPerPage);

  const currFoundations = foundationsType.list.slice(
    firstFoundationIndex,
    lastFoundationIndex
  );

  return (
    <section id="organizations">
      <div className="foundationBtns">
        <Button
          active={
            foundationsType === organizationsLists.foundations ? true : false
          }
          onBtnClick={(e) => {
            setFoundationType(organizationsLists.foundations);
            setCurrentPage(1);
          }}
        >
          Fundacjom
        </Button>
        <Button
          active={
            foundationsType === organizationsLists.organizations ? true : false
          }
          onBtnClick={() => {
            setFoundationType(organizationsLists.organizations);
            setCurrentPage(1);
          }}
        >
          Organizacjom <br /> pozarządowym
        </Button>
        <Button
          active={
            foundationsType === organizationsLists.communityFundraising
              ? true
              : false
          }
          onBtnClick={() => {
            setFoundationType(organizationsLists.communityFundraising);
            setCurrentPage(1);
          }}
        >
          Lokalnym <br /> zbiórkom
        </Button>
      </div>
      <div className="foundationsBox">
        <p className="foundationTitle">{foundationsType.description}</p>
        <ul>
          {currentItems.map((foundation) => (
            <li key={foundation.name}>
              <FoundationCore
                fundType="Fundacja"
                name={foundation.name}
                mission={foundation.mission}
                assets={foundation.assets}
              />
            </li>
          ))}
        </ul>
        {foundationsType.list.length > itemsPerPage && (
          <Pagination
            totalFoundations={foundationsType.list.length}
            foundationsPerPage={itemsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        )}
      </div>
    </section>
  );
};

export default HomeOrganizationView;
