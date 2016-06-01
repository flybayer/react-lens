//Docs at https://source.unsplash.com/
const imageUrlBase = 'https://source.unsplash.com/';

const Image = (props) => {
  const style = {
    border: '1px black solid',
    borderRadius: 15,
    margin: 10,
    height: '75vh'
  };
  return (
    <img
      src={props.url}
      style={style}
    />
  );
};

const CategorySelector = React.createClass({
  getInitialState() {
    return {value: this.props.initialValue}
  },
  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onChange(event.target.value);
  },
  render() {
    const { initialValue, onChange, ...other } = this.props;
    return (
      <select
        {...other}
        value={this.state.value}
        onChange={this.handleChange}
      >
        <option value='all'>all</option>
        <option value='buildings'>buildings</option>
        <option value='food'>food</option>
        <option value='nature'>nature</option>
        <option value='people'>people</option>
        <option value='technology'>technology</option>
        <option value='objects'>objects</option>
      </select>
    );
  }
});

const App = React.createClass({
  getInitialState() {
    return {category: 'all'};
  },
  handleCategoryChange(category) {
    this.setState({category: category})
  },
  render() {
    let url = this.props.imageUrlBase;

    if (this.state.category == 'all') {
      url += 'random';
    } else {
      url += 'category/' + this.state.category;
    }

    const sectionStyle = {
      textAlign: 'center'
    };
    const selectorStyle = {
      display: 'block',
      margin: '0 auto 1em'
    };

    return (
      <section style={sectionStyle}>
        <h1>React Lens</h1>
        <CategorySelector
          initialValue={this.state.category}
          onChange={this.handleCategoryChange}
          style={selectorStyle}
        />
        <Image
          url={url}
        />
      </section>
    );
  }
});

ReactDOM.render(
  <App
    imageUrlBase={imageUrlBase}
  />,
  document.getElementById('main')
);
