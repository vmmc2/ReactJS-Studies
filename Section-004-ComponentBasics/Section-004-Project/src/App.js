import keyConceptsImage from './assets/images/key-concepts.png';
import componentsImage from './assets/images/components.png';
import stateImage from './assets/images/state.png';
import eventsImage from './assets/images/events.png';
import Card from './components/Card';
import Header from './components/Header';

const concepts = [
  {
    title: 'Components',
    image: componentsImage,
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'State',
    image: stateImage,
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'Events',
    image: eventsImage,
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
];

function App() {
  return (
    <div>
      <Header imgSrc={keyConceptsImage} />
      <ul id="concepts">
        <Card className="concept" imgSrc={concepts[0].image} imgAlt={concepts[0].title} title={concepts[0].title} description={concepts[0].description} />
        <Card className="concept" imgSrc={concepts[1].image} imgAlt={concepts[1].title} title={concepts[1].title} description={concepts[1].description} />
        <Card className="concept" imgSrc={concepts[2].image} imgAlt={concepts[2].title} title={concepts[2].title} description={concepts[2].description} />
      </ul>
    </div>
  );
}

export default App;
