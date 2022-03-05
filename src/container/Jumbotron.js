import {Jumbotron} from "../components/";
import jumboData from "../fixtures/jumbo.json"

function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map(item => {
        return(
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            
            <Jumbotron.Pane>
               <Jumbotron.Image src={item.image}/>
            </Jumbotron.Pane>
          </Jumbotron>
        )
      }) }
    </Jumbotron.Container>
  );
}

export default JumbotronContainer;
