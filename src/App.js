import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';
import marked from 'marked';

class OutputArea extends React.Component {
  constructor(props) {
    super(props);
  }
  getMarkdownText() {
    var rawMarkup = marked(this.props.html, {sanitize: true});
    return { __html: rawMarkup };
  }
  render() {
  return (
    <div>
      <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()} />
     </div>
    )
  }
}

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: placeholder};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div>
          <textarea id="editor" value={this.state.value} onChange={this.handleChange}>
            # Markdown Previewer
            ## It's 2020, why aren't you writing in markdown yet?
          </textarea>
        </div>
        <div>
          <OutputArea html={this.state.value} />
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <TextArea />
    </div>
  );
}

const placeholder = `# [All Star](https://www.youtube.com/watch?v=L_jWHffIx5E)
## By [Smash Mouth](https://www.google.com/search?client=firefox-b-1-d&sxsrf=ALeKk02dEcbSa1xk4dRX2vR1Z-3w_MZwXQ:1604032600798&q=Smash+Mouth&stick=H4sIAAAAAAAAAONgVuLUz9U3MIwvyMtdxModnJtYnKHgm19akgEA8olxthsAAAA&sa=X&ved=2ahUKEwiKq4OLv9vsAhWbKDQIHcudCGUQMTAAegQIBxAD&biw=1920&bih=938)
Somebody once told me the world is gonna roll me

I ain't the sharpest tool in the shed

She was looking kind of dumb with her finger and her thumb

In the shape of an "L" on her forehead

Well, the years start coming and they don't stop coming

Fed to the rules and I hit the ground running

Didn't make sense not to live for fun

Your brain gets smart but your head gets dumb

So much to do, so much to see

So what's wrong with taking the backstreets?

You'll never know if you don't go

You'll never shine if you don't glow

Hey now, you're an all star

Get your game on, go play

Hey now, you're a rock star

Get the show on, get paid

And all that glitters is gold

Only shooting stars break the mold

It's a cool place, and they say it gets colder

You're bundled up now, wait 'til you get older

But the meteor men beg to differ

Judging by the hole in the satellite picture

The ice we skate is getting pretty thin

The water's getting warm so you might as well swim

My world's on fire, how 'bout yours?

That's the way I like it and I'll never get bored

Hey now, you're an all star

Get your game on, go play

Hey now, you're a rock star

Get the show on, get paid

All that glitters is gold

Only shooting stars break the mold

Somebody once asked

Could I spare some change for gas?

"I need to get myself away from this place"

I said, "Yep, what a concept

I could use a little fuel myself

And we could all use a little change"

Well, the years start coming and they don't stop coming

Fed to the rules and I hit the ground running

Didn't make sense not to live for fun

Your brain gets smart but your head gets dumb

So much to do, so much to see

So what's wrong with taking the backstreets?

You'll never know if you don't go (go!)

You'll never shine if you don't glow

Hey now, you're an all star

Get your game on, go play

Hey now, you're a rock star

Get the show on, get paid

And all that glitters is gold

Only shooting stars break the mold

Hey now

Hey now

Hey, hey, hey now

Hey now

Hey now, you're an all star

Hey now, you're an all star

Hey now, you're an all star

Only shooting stars break the mold
`;

ReactDOM.render(<App />, document.getElementById("root"))
