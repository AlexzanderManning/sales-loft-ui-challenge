import styled from "styled-components";

import Staroutlined from "../../_starter/shared/Icons/StarOutlined";
import EllipsisHorizontal from "../../_starter/shared/Icons/EllipsisHorizontal";

const Card = ({children}) => { 
   const StyledCard = styled.div`
     margin: 10px 0;
     border: 1px solid #e5e5e5;
     background-color: #fff;

     .cardHeader {
       padding: 0.5rem 1rem;
       display: flex;
       flex-direction: row;
       border-bottom: 1px solid #e5e5e5;
     }

     .ellipsis {
       margin-left: auto;
     }
   `;

     

   const StyledStar = styled(Staroutlined)`
     color: #ffa726;
   `;

   const StyledEllipsis = styled(EllipsisHorizontal)`
     color: #4f5359;
   `;
  return (
    <StyledCard>
      <div className="cardHeader">
        <div>
          <StyledStar />
        </div>
        <div className="ellipsis">
          <StyledEllipsis />
        </div>
      </div>
      <div className="">
        {children}
      </div>
    </StyledCard>
  );
}

export default Card;