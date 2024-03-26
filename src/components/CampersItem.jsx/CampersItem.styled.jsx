import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  padding: 24px;
  align-items: flex-start;
  gap: 24px;
  max-width: 840px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  background: #ffffff;
`;

export const StyledImg = styled.img`
  width: 290px;
  height: 310px;
  border-radius: 10px;
  object-fit: cover;
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const StyledHeader = styled.h2`
  color: #101828;
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
`;

export const StyledPriceContainer = styled.div`
  display: flex;
  width: 158px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledPrice = styled.span`
  color: #101828;
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
`;

export const StyledFavButton = styled.button`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1) transform 0.3s ease 0s;

  svg {
    stroke: #101828;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  svg:hover,
  svg:focus {
    stroke: #d84343;
  }
`;

export const StyledRateLocContainer = styled.div`
  display: flex;
  align-items: center;
  color: #101828;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 24px;

  .reviewsText {
    margin-left: 4px;
    margin-right: 16px;
    text-decoration-line: underline;
  }

  .locationText {
    margin-left: 4px;
  }
`;

export const StyledDescription = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: #475467;
  text-overflow: ellipsis;
  width: 525px;
  margin-bottom: 24px;

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

export const StyledCharactersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const StyledCharactersItem = styled.li`
  display: flex;
  padding: 12px 18px;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  background: #f2f4f7;
`;

export const StyledItemText = styled.span`
  color: #101828;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
`;

export const StyledShowMoreButton = styled.button`
  padding: 16px 40px;
  border-radius: 200px;
  background: #e44848;
  color: #ffffff;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.08px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #d84343;
  }
`;
