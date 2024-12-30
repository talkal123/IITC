import CardComponent from "./cardComponent"
import { FC } from 'react';


interface DisplayComponentProps {
  search: string;
}

const DisplayComponent: FC<DisplayComponentProps> =({search}) => {
  return (
    <div className="grid">
    <CardComponent search={search} />
   </div>
  )
}

export default DisplayComponent;