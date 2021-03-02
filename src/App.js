import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Reviews from './mock_data/reviews.json';

function App() {
  return (
    <div className="App">
      <List>
      {Reviews.map(item => (
                <ListItem><ListItemText primary={item.review_summary} secondary={item.posted_by} /></ListItem>
              ))}
      </List>
    </div>
  );
}

export default App;
