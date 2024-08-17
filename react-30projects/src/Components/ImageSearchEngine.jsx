import React, { Component } from 'react';

export default class ImageSearchEngine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      page: 1,
      results: [],
    };
  }

  handleInputChange = (e) => {
    this.setState({ keyword: e.target.value });
  }

  searchImages = async () => {
    const { keyword, page } = this.state;
    const accessKey = "xfHagP0SZyySBvsb6hjF6GkZEqIkSzL49koWS4XhRY0";
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
      this.setState({ results: data.results });
    } else {
      this.setState((prevState) => ({
        results: [...prevState.results, ...data.results]
      }));
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ page: 1 }, () => {
      this.searchImages();
    });
  }

  showMoreImages = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1
    }), () => {
      this.searchImages();
    });
  }

  render() {
    const { results } = this.state;
    const styles = {
      searchForm: {
        marginLeft: '500px',
        marginTop: '50px',
      },
      searchResult: {
        width: '50%',
        margin: '100px auto 50px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '40px',
      },
      image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '5px',
      },
      button: {
        padding: '10px',
        marginLeft: '550px',
        borderRadius: '20px',
        backgroundColor: 'burlywood',
      },
      searchButton: {
        padding: '10px',
        borderRadius: '20px',
        backgroundColor: 'blue',
        color: 'wheat',
      },
      header: {
        marginRight: '20px',
        color: 'red',
        textAlign: 'center',
      },
    };

    return (
      <div>
        <div style={styles.header}>
          <h2>Image Search Engine</h2>
        </div>
        <form style={styles.searchForm} onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="search to get images"
            value={this.state.keyword}
            onChange={this.handleInputChange}
          />
          <button type="submit" style={styles.searchButton}>Search</button>
        </form>
        <div id="search-result" style={styles.searchResult}>
          {results.map((result) => (
            <a key={result.id} href={result.links.html} target="_blank" rel="noopener noreferrer">
              <img src={result.urls.small} alt={result.alt_description} style={styles.image} />
            </a>
          ))}
        </div>
        {results.length > 0 && (
          <button onClick={this.showMoreImages} style={styles.button}>Show More</button>
        )}
      </div>
    );
  }
}
