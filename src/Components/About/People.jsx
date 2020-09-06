import React, { Component } from "react";
import styled from "styled-components";

const Head = styled.div`
  margin: 30px;
  & > * {
    text-align: center;
  }
`;

const Flexbox = styled.div`
  display: flex;
`;

const Team = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Left = styled.div`
  margin-left: 250px;
  margin-top: 40px;
  & > * {
    text-align: center;
  }
`;

const Limage = styled.img`
  width: 295px;
  border-radius: 50%;
`;

const SimageDiv = styled.div`
  margin: auto;
  text-align: center;
  padding: 50px;
  padding-bottom: 0px;
  width: 240px;
  & > :nth-last-child(1) {
    padding-top: 20px;
    text-align: left;
  }
`;

const Simage = styled.img`
  width: 250px;
  border-radius: 50%;
`;

const Icon = styled.img`
  width: 6px;
  :hover {
    cursor: pointer;
  }
`;

const Right = styled.div`
  margin-left: 70px;
  margin-right: 200px;
  margin-top: 40px;
  & > * {
    text-align: left;
  }
  a {
    text-decoration: none;
    font-weight: 500;
    color: #1762c4;
    :hover {
      color: #555;
    }
  }
`;

export default class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      austin: false,
      nikhil: false,
      kailash: false,
      venu: false,
      hanan: false,
      seema: false,
    };
  }

  toggleBtn = (e) => {
    if (e.target.name === "austin") {
      this.setState({
        austin: !this.state.austin,
      });
    }

    if (e.target.name === "nikhil") {
      this.setState({
        nikhil: !this.state.nikhil,
      });
    }

    if (e.target.name === "kailash") {
      this.setState({
        kailash: !this.state.kailash,
      });
    }

    if (e.target.name === "venu") {
      this.setState({
        venu: !this.state.venu,
      });
    }

    if (e.target.name === "hanan") {
      this.setState({
        hanan: !this.state.hanan,
      });
    }

    if (e.target.name === "seema") {
      this.setState({
        seema: !this.state.seema,
      });
    }
  };

  render() {
    const { austin, nikhil, kailash, venu, hanan, seema } = this.state;

    return (
      <>
        <Head>
          <h1>People</h1>
        </Head>

        <Flexbox>
          <Left>
            <Limage src="./nithin-kamath.jpg" alt="nithin-kamath.jpg" />
            <h3>Nithin Kamath</h3>
            <div>Founder, CEO</div>
          </Left>

          <Right>
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He was named one of the “Top 10 Businessmen to Watch Out for in
              2016 in India” by The Economic Times for pioneering and scaling
              discount broking in India.
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on{" "}
              <a href="https://tradingqna.com/u/nithin/summary">TradingQnA</a> /{" "}
              <a href="https://twitter.com/Nithin0dha">Twitter</a>
            </p>
          </Right>
        </Flexbox>

        <Team>
          <SimageDiv
            style={
              kailash || austin || nikhil
                ? { height: "700px" }
                : { height: "400px" }
            }
          >
            <Simage src="./Austin.jpg" alt="Austin.jpg" />
            <h3>Austin Prakesh</h3>
            <div>Director - Strategy</div>
            <div>
              Bio{" "}
              <Icon
                onClick={this.toggleBtn}
                name="austin"
                src={austin ? "./arrowup.svg" : "./arrowdown.svg"}
              />
            </div>
            <div style={austin ? { display: "block" } : { display: "none" }}>
              Austin is a successful self-made entrepreneur from Singapore. His
              area of specialty revolves around helping organisations including
              grow by optimizing revenue streams and creating growth strategies.
              He is a boxing enthusiast and loves collecting exquisite watches.
            </div>
          </SimageDiv>

          <SimageDiv
            style={
              kailash || austin || nikhil
                ? { height: "700px" }
                : { height: "400px" }
            }
          >
            <Simage src="./Nikhil.jpg" alt="Nikhil.jpg" />
            <h3>Nikhil Kamath</h3>
            <div>{`Co-founder & CIO`}</div>
            <div>
              Bio{" "}
              <Icon
                onClick={this.toggleBtn}
                name="nikhil"
                src={nikhil ? "./arrowup.svg" : "./arrowdown.svg"}
              />
            </div>
            <div style={nikhil ? { display: "block" } : { display: "none" }}>
              Nikhil is an astute investor with over a decade of experience and
              an impeccable track record, who specializes in modelling
              sophisticated long term investment strategies and portfolios. He
              heads investments and risk management at Zerodha. An avid reader,
              he always appreciates a good game of chess.
            </div>
          </SimageDiv>

          <SimageDiv
            style={
              kailash || austin || nikhil
                ? { height: "700px" }
                : { height: "400px" }
            }
          >
            <Simage src="./Kailash.jpg" alt="Kailash.jpg" />
            <h3>Dr. Kailash Nadh</h3>
            <div>CTO</div>
            <div>
              Bio{" "}
              <Icon
                onClick={this.toggleBtn}
                name="kailash"
                src={kailash ? "./arrowup.svg" : "./arrowdown.svg"}
              />
            </div>
            <div
              style={kailash ? { display: "block" } : { display: "none" }}
            >{`Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.`}</div>
          </SimageDiv>

          <SimageDiv
            style={
              seema || hanan || venu ? { height: "700px" } : { height: "400px" }
            }
          >
            <Simage src="./Venu.jpg" alt="Venu.jpg" />
            <h3>Venu Madhav</h3>
            <div>Chief of Operations</div>
            <div>
              Bio{" "}
              <Icon
                onClick={this.toggleBtn}
                name="venu"
                src={venu ? "./arrowup.svg" : "./arrowdown.svg"}
              />
            </div>
            <div style={venu ? { display: "block" } : { display: "none" }}>
              Venu is the backbone of Zerodha taking care of operations and
              ensuring that we are compliant to rules and regulations. He has
              over a dozen certifications in financial markets and is also
              proficient in technical analysis. Workouts, cycling, and
              adventuring is what he does outside of Zerodha.
            </div>
          </SimageDiv>

          <SimageDiv
            style={
              seema || hanan || venu ? { height: "700px" } : { height: "400px" }
            }
          >
            <Simage src="./Hanan.jpg" alt="Hanan.jpg" />
            <h3>Hanan Delvi</h3>
            <div>Chief of Client Relations</div>
            <div>
              Bio{" "}
              <Icon
                onClick={this.toggleBtn}
                name="hanan"
                src={hanan ? "./arrowup.svg" : "./arrowdown.svg"}
              />
            </div>
            <div style={hanan ? { display: "block" } : { display: "none" }}>
              We take pride in the way we support our clients, and Hanan is
              responsible for this with his never ending flow of energy. He is
              the man behind many of our support initiatives that have helped us
              stay ahead of the game. A free thinker, Hanan can be seen posing
              as one in his free time.
            </div>
          </SimageDiv>

          <SimageDiv
            style={
              seema || hanan || venu ? { height: "700px" } : { height: "400px" }
            }
          >
            <Simage src="./Seema.jpg" alt="Seema.jpg" />
            <h3>Seema Patil</h3>
            <div>Chief of Quality</div>
            <div>
              Bio{" "}
              <Icon
                onClick={this.toggleBtn}
                name="seema"
                src={seema ? "./arrowup.svg" : "./arrowdown.svg"}
              />
            </div>
            <div style={seema ? { display: "block" } : { display: "none" }}>
              Seema worked with an international airline business for over 6
              years before joining us. She uses her experience of liasing with
              people from various backgrounds to ensure that our ever expanding
              support team maintains highest quality. She is an extremely
              disciplined fitness enthusiast.
            </div>
          </SimageDiv>
        </Team>
      </>
    );
  }
}
