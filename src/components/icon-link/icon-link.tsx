import React from 'react';
import { useHistory } from 'react-router-dom';
import './icon-link.scss';

interface Props {
  icon: string;
  path: string;
}

const IconLink: React.FC<Props> = (props) => {
  const history = useHistory();
  const handleClick = (): void => history.push(props.path);

  return (
    <i className="IconLink material-icons" onClick={handleClick}>{props.icon}</i>
  );
}

export default IconLink;
