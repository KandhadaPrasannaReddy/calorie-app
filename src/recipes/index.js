import React from 'react';

import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import spaghetti_img from '../images/loaded_spaghetti.jpg';
import bowties_img from '../images/bowties_img.jpg';
import bakedchicken_img from '../images/bakedchicken_img.jpg';
import tofu_img from '../images/tofu-and-quinoa-img.jpg';

import '../App.css';
import Navbar from '../navbar';

class Recipes extends React.Component{
    render(){
        return(
            
            <div>
            <h1> Recipes</h1>
            {
            <CardColumns>
            <Card>
            <Card.Img variant="top" src={spaghetti_img} style={DIMENSIONS.dim_small}/>
            <Card.Body>
            <Card.Title> Loaded Spaghetti </Card.Title>
            <Card.Text>
            1 cup sliced bell pepper<br/>
            1/2 cup sliced red onion<br/>
            1 tsp olive oil<br/>
            1 cup cooked whole-wheat spaghetti<br/>
            2/3 cup cooked edamame<br/>
            Sauté peppers and onions in oil until onions are translucent. Toss with pasta and edamame.<br/>
            <Card.Text>
            <small className="text-muted"> Per serving: 420 cal</small>
            </Card.Text>
            </Card.Text>
            </Card.Body>

            </Card>
            <Card className="p-3">
            <blockquote className="blockquote mb-0 card-body">
            <p class="yellow-bg">
            Heath is not about weight you lose, it is about life you gain.
            </p>     
            </blockquote>
            </Card>
            
            <Card>
            <Card.Img variant="top" src={bowties_img} />
            <Card.Body>
            <Card.Title>Bow Ties with Spring Vegetables</Card.Title>
            <Card.Text>
            2 oz dry whole-grain farfalle pasta<br/>
            2 tsp olive oil<br/>
            1/2 cup artichoke hearts<br/>
            1/4 cup sliced red onion<br/>
            1/4 cup peas<br/>
            1 Tbsp chopped fresh mint<br/>
            Cook pasta as directed and toss with oil, vegetables, and mint. Season with salt and pepper to taste.<br/>
            Per serving: 370 cal
            .{' '}
            </Card.Text>
            </Card.Body>
            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
            <blockquote className="blockquote mb-0 card-body">
            <p class="blue-bg">
                It isn't just about eating. It is about learning. 
            </p>
            </blockquote>
            </Card>
  
            <Card className="text-center">
            <Card.Img variant="top" src={bakedchicken_img} />
            <Card.Body>
            <Card.Title>Baked Chicken with Mushrooms and Sweet Potato</Card.Title>
            <Card.Text>
            1/2 skinless chicken breast<br/>
            1 cup baby portobello mushrooms, sliced<br/>
            1 Tbsp chives<br/>
            1 Tbsp olive oil<br/>
            1 medium sweet potato<br/>
            In a 350°F oven, bake chicken, topped with mushrooms, chives, and oil, for 15 minutes. Microwave sweet potato for five to seven minutes.<br/>
            <Card.Text>
            <small className="text-muted"> Per serving: 382 cal</small>
            </Card.Text>
            </Card.Text>
            <Card.Text>
            </Card.Text>
            </Card.Body>
            </Card>
  
            
            <Card className="text-right">
            <blockquote className="blockquote mb-0 card-body">
            <p  class="pink-bg" >
            If you get the inside right, the outside will fall into place.
            </p>
            </blockquote>
            </Card>
            <Card>
            <Card.Img variant="top" src={tofu_img} />
            <Card.Body>
            <Card.Title>Zesty Tofu and Quinoa</Card.Title>
            <Card.Text>
            1 cup cooked quinoa<br/>
            2 oz extra-firm tofu, cubed<br/>
            3 Tbsp diced red pepper<br/>
            3 Tbsp diced green pepper<br/>
            1 tsp cilantro<br/>
            2 Tbsp diced avocado<br/>
            2 tsp fresh lime juice<br/>
            Combine all ingredients.<br/>
      
            </Card.Text>
            <Card.Text>
            <small className="text-muted"> Per serving: 320 cal</small>
            </Card.Text>
            </Card.Body>
            </Card>
            </CardColumns>
            }
            <Navbar/>
    </div>
    );
    }
}
const DIMENSIONS = {
    dim_small : {
        height : '25%',
        width : '100%'
    },
    dim_medium : {
        height : '125%',
        width : '100%'
    }
}
export default Recipes;