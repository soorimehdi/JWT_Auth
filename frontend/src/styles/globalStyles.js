import { createStyles } from '@material-ui/core';

import IRANSans from '../util/font/IRANSans.ttf'

const globalStyles = () =>{
    createStyles({
        '@font-face': 
          {
            fontFamily: 'IRANSans',
            fontStyle: 'normal',
            src: `url(${IRANSans})`,
          },
    });
}
  

export default globalStyles;