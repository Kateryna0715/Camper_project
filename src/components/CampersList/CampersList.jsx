import CampersItem from 'components/CampersItem.jsx/CampersItem';
import { StyledList } from './CampersList.styled';

const CampersList = ({ campers }) => {
  return (
    <StyledList>
      {campers.map(camper => (
        <CampersItem key={camper._id} camper={camper} />
      ))}
    </StyledList>
  );
};

export default CampersList;
