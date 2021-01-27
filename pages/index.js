import styled from 'styled-components';
import db from '../db.json';
import GitHubCorner from '../src/components/GitHubCorner'
import QuizContainer from '../src/components/QuizContainer';
import BackgroundImage from '../src/components/BackgroundImage';
import Widget from '../src/components/Widget';
import Logo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <BackgroundImage>
      <GitHubCorner />
      <QuizContainer>
        <Logo src="/images/logo.png" width={400} height={400} />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            {db.description}
            <input
              placeholder="Digite seu nome para jogar"
              type="text"
              name=""
              id=""
            />
            <Widget.Button>Jogar</Widget.Button>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Quizes da Comunidade</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Gostou deste Quiz? Dá uma olhada no que o pessoal da{' '}
              <a>Imersão React NextJs</a> já fez:
            </p>
            <Widget.CommunityLinks>
              clebinhodj/showdomilhaoalura
            </Widget.CommunityLinks>
            <Widget.CommunityLinks>
              clebinhodj/showdomilhaoalura
            </Widget.CommunityLinks>
            <Widget.CommunityLinks>
              clebinhodj/showdomilhaoalura
            </Widget.CommunityLinks>
          </Widget.Content>
        </Widget>
        <Footer
          src="/images/alura-logo.svg"
          width={75}
          height={35}
          content={[
            'Orgulhosamente criado durante a imersão ',
            <a href="https://www.alura.com.br/" target="__blank" style={{ color: 'white' }}>
              React da Alura
            </a>,
          ]}
        ></Footer>
      </QuizContainer>
    </BackgroundImage>
  );
}
