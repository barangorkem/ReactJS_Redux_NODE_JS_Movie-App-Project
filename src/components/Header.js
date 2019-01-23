import React, { Component } from 'react';
import {
    Container,Image,Menu,Visibility} from 'semantic-ui-react';
import {menuStyle,fixedMenuStyle} from '../helpers/styleHelper';
import {Link,NavLink} from 'react-router-dom';
class Header extends Component {
    state = {
        menuFixed: false,
        overlayFixed: false,
      };
    
     
    
    
    
      unStickOverlay = () => this.setState({ overlayFixed: false })
    
      unStickTopMenu = () => this.setState({ menuFixed: false })
    render() {
        const { menuFixed} = this.state;
        return (
            <div>
                   <Container text style={{ marginTop: '2em' }}>
         
         </Container>
 
         {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
             gone beyond the scope of visibility
           */}
         <Visibility
           onBottomPassed={this.stickTopMenu}
           onBottomVisible={this.unStickTopMenu}
           once={false}
         >
           <Menu
             borderless
             fixed={menuFixed ? 'top' : undefined}
             style={menuFixed ? fixedMenuStyle : menuStyle}
           >
             <Container text>
               <Menu.Item as={Link} to="/" exact="true">
                 <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
                 <Menu.Item header>MovieApp</Menu.Item>
               </Menu.Item>
               
               <Menu.Item as={NavLink} to="/movies" exact={true}>
              Movies
               </Menu.Item>
               <Menu.Item as={NavLink} to="/movies/new">Add New</Menu.Item>
 
            
               
             </Container>
           </Menu>
         </Visibility>
            </div>
        );
    }
}

export default Header;