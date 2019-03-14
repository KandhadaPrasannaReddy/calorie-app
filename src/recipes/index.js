import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import spaghetti_img from '../images/loaded_spaghetti.jpg';
import bowties_img from '../images/bowties_img.jpg';
import bakedchicken_img from '../images/bakedchicken_img.jpg';
import tofu_img from '../images/tofu-and-quinoa-img.jpg';
import mermaid_img from '../images/mermaid.jpg';
import choco_banana_img from '../images/choco_banana.jpg';
import berry_smoothie_img from '../images/berry_smothie.jpg';
import sunrise_smoothie_img from '../images/sunrise_smoothie.jpg';
import unicorn_img from '../images/unicorn_img.jpg';
import cucumber_salad from '../images/cucumber_salad.jpg';
import mimosa from '../images/mimosa.jpg';
import pineapple from '../images/pineapple_cream.jpg';
import peanut_balls from '../images/peanut_balls.jpg';
import broiled_mango from '../images/broiled_mango.jpg';
import cherries_almonds from '../images/cherries_almonds.jpg';



class Recipes extends React.Component{
    render(){
        return(
            <div>
                    
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
            <Card.Text>
            <small className="text-muted"> Per serving: 370 cal</small>
            </Card.Text>
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
            <Card>
            <Card.Img variant="top" src={mermaid_img} />
            <Card.Body>
            <Card.Title>Mermaid Smoothie Bowl</Card.Title>
            <Card.Text>
            2 frozen bananas, peeled<br/>
            2 kiwis, peeled<br/>
            1 cup fresh pineapple chunks<br/>
            1 cup unsweetened almond milk<br/>
            2 teaspoons blue spirulina powder<br/>
            ½ cup fresh blueberries<br/>
            ½ small Fuji apple, thinly sliced<br/>
            Combine bananas, kiwis, pineapple, almond milk and spirulina in a blender. <br/>
            Blend on high until smooth, about 2 minutes. <br/>
            Divide the smoothie between 2 bowls. Top with blueberries and apples.<br/>
      
            </Card.Text>
            <Card.Text>
            <small className="text-muted"> Per serving: 251 cal</small>
            </Card.Text>
            </Card.Body>
            </Card>
            
            <Card>
            <Card.Img variant="top" src={choco_banana_img} />
            <Card.Body>
            <Card.Title>Chocolate-Banana Protein Smoothie</Card.Title>
            <Card.Text>
            1 banana, frozen<br/>
            2 teaspoons unsweetened cocoa powder<br/>
            1 teaspoon pure maple syrup<br/>
            ½ cup cooked red lentils<br/>
            ½ cup nonfat milk<br/>
            Combine banana, lentils, milk, cocoa and syrup in a blender. <br/> 
            Puree until smooth.<br/>
      
            </Card.Text>
            <Card.Text>
            <small className="text-muted"> Per serving: 310 cal</small>
            </Card.Text>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src={berry_smoothie_img} />
            <Card.Body>
            <Card.Title>Berry Smoothies</Card.Title>
            <Card.Text>
            2 cups mixed frozen berries<br/>
            ⅓ cup nonfat dry milk powder<br/>
            1 (6 ounce) container blueberry fat-free yogurt<br/>
            1 tablespoon fresh blueberries (optional)<br/>
            ½ cup light cranberry-raspberry juice<br/>
            In a blender, combine frozen berries, yogurt, juice, and dry milk powder. <br/> 
            Cover and blend until smooth. <br/> 
            Pour into two glasses. <br/>
            If desired, garnish with fresh blueberries. <br/> 
            </Card.Text>
            <Card.Text>
            <small className="text-muted"> Per serving: 164 cal</small>
            </Card.Text>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src={sunrise_smoothie_img} />
            <Card.Body>
            <Card.Title>Sunrise Smoothies</Card.Title>
            <Card.Text>
            1½ cups seeded, cut-up watermelon<br/>
            1 cup cut-up cantaloupe<br/>
            ½ cup plain low-fat yogurt<br/>
            ¼ cup orange juice<br/>
            Small wedges cantaloupe and/or watermelon (optional)<br/>
            Place the 1½ cups watermelon in a blender. <br/>
            Cover and blend until smooth.  <br/>
            Divide watermelon puree between two 12-ounce glasses; set aside.  <br/>
            Rinse out blender.  <br/>
            In blender, combine the 1 cup cantaloupe, the yogurt, and orange juice.  <br/>
            Cover and blend until smooth. Slowly pour into glasses on top of watermelon puree.  <br/>
            If desired, garnish with small wedges cantaloupe and/or watermelon. <br/>
            </Card.Text>
            <Card.Text>
            <small className="text-muted"> Per serving: 114 cal</small>
            </Card.Text>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src={unicorn_img} />
            <Card.Body>
            <Card.Title>Unicorn Smoothie</Card.Title>
            <Card.Text>
            1½ cups low-fat milk, divided<br/>
            1 cup frozen mango chunks<br/>
            1 cup frozen raspberries or strawberries<br/>
            Star fruit, kiwi, mixed berries and chia seeds for garnish<br/>
            1½ cups low-fat vanilla yogurt, divided<br/>
            3 large bananas, divided<br/>
            1 cup frozen blackberries or blueberries  <br/>
            Combine ½ cup each milk and yogurt, 1 banana and blackberries (or blueberries) in a blender. <br/>
            Blend until smooth. <br/>
            Repeat with milk and yogurt, 1 banana and mango chunks.<br/>
            Once again with milk and yogurt, the remaining banana and raspberries.<br/>
            Arrange in layer and sprinkle with chia seeds.<br/>
            </Card.Text>
            <Card.Text>
            <small className="text-muted"> Per serving: 340 cal</small>
            </Card.Text>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src={cucumber_salad} />
            <Card.Body>
            <Card.Title>Vidalia Onion Cucumber Salad</Card.Title>
            <Card.Text>
            1 English cucumber (about 11 ounces)<br/>
            ½ medium sweet onion<br/>
            2 tablespoons rice vinegar<br/>
            2 tablespoons chopped fresh dill<br/>
            ½ teaspoon sea salt<br/>
            ½ teaspoon ground pepper<br/>
            Using a vegetable peeler, shave off alternating strips of cucumber to create a striped effect.<br/>
            Thinly slice the cucumber and place in a bowl. <br/>
            Cut the onion very thinly crosswise with a knife or mandoline. <br/>
            Add to the cucumber. Drizzle with vinegar. <br/>
            Add dill, salt and pepper and gently stir to combine. <br/>
            Let stand for 15 minutes to briefly marinate. <br/>
            Gently stir again before serving. <br/>
            
            </Card.Text>
            <Card.Text>
            <small className="text-muted"> Per serving: 12 cal</small>
            </Card.Text>
            </Card.Body>
            </Card>
            
            <Card>
            <Card.Img variant="top" src={mimosa} />
            <Card.Body>
            <Card.Title>Mimosa Fruit Salad</Card.Title>
            <Card.Text>
            2 cups halved clementine segments<br/>
            2 cups sliced halved peeled kiwi<br/>
            2 cups diced watermelon, cantaloupe or honeydew melon<br/>
            1 cup halved blackberries<br/>
            1 cup quartered strawberries<br/>
            1 cup chilled prosecco<br/>
            ½ cup orange juice<br/>
            2 tablespoons chopped fresh mint <br/>
            Combine clementines, kiwi, melon, blackberries and strawberries in a large bowl.  <br/>
            Stir prosecco, orange juice and mint together in a small bowl. <br/>
            Pour over the fruit and stir gently. <br/>
        
            </Card.Text>
            <Card.Text>
            <small className="text-muted"> Per serving: 90 cal</small>
            </Card.Text>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src={pineapple} />
            <Card.Body>
            <Card.Title>Pineapple Nice Cream</Card.Title>
            <Card.Text>
            1 16-ounce package frozen pineapple chunks<br/>
            1 tablespoon lemon juice or lime juice<br/>
            1 cup frozen mango chunks or 1 large mango, peeled, seeded and chopped<br/>
            Process pineapple, mango and lemon (or lime) juice in a food processor until smooth and creamy. <br/>
            For the best texture, serve immediately.<br/>
            
            </Card.Text>
            <Card.Text>
            <small className="text-muted"> Per serving: 55 cal</small>
            </Card.Text>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src={peanut_balls} />
            <Card.Body>
            <Card.Title>Peanut Butter-Oat Energy Balls</Card.Title>
            <Card.Text>
            ¾ cup chopped dates<br/>
            ½ cup rolled oats<br/>
            ¼ cup natural peanut butter<br/>
            Chia seeds for garnish<br/>
            Soak dates in a small bowl of hot water for 5 to 10 minutes. Drain.<br/>
            Combine the soaked dates, oats and peanut butter in a food processor and process until very finely chopped. <br/>
            Roll into 12 balls (a scant tablespoon each). Garnish with chia seeds, if desired. <br/>
            Refrigerate for at least 15 minutes and up to 1 week.<br/>
            </Card.Text>
            <Card.Text>
            <small className="text-muted"> Per serving: 73 cal</small>
            </Card.Text>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src={broiled_mango} />
            <Card.Body>
            <Card.Title>Broiled Mango</Card.Title>
            <Card.Text>
            1 mango, peeled and sliced <br/>
            Lime wedges<br/>
            Position rack in upper third of oven and preheat broiler. Line a broiler pan with foil.<br/>
            Arrange mango slices in a single layer in the prepared pan. <br/>
            Broil until browned in spots, 8 to 10 minutes. Squeeze lime wedges over the broiled mango and serve.<br/>
        
            </Card.Text>
            <Card.Text>
            <small className="text-muted"> Per serving: 102 cal</small>
            </Card.Text>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src={cherries_almonds} />
            <Card.Body>
            <Card.Title>Cherries with Ricotta with Toasted Almonds</Card.Title>
            <Card.Text>
            ¾ cup frozen pitted cherries <br/>
            2 tablespoons part-skim ricotta<br/>
            1 tablespoon toasted slivered almonds.<br/>
            Heat cherries in the microwave on High until warm, 1 to 2 minutes. Top the cherries with ricotta and almonds. <br/>
            
            </Card.Text>
            <Card.Text>
            <small className="text-muted"> Per serving: 155 cal</small>
            </Card.Text>
            </Card.Body>
            </Card>
        </CardColumns>;
                    
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