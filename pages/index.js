import React from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';

import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import BackgroundImage from '../src/components/BackgroundImage';
import Widget from '../src/components/Widget';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Logo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <div id="particles-js">
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
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  router.push(`/quiz?name=${name}`);
                }}
              >
                <Input
                  name="nomeDoUsuario"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Digite seu nome para jogar"
                />
                <Button type="submit" disabled={name.length === 0}>
                  {`Jogar ${name}`}
                </Button>
              </form>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Header>
              <h1>Quizes da Comunidade</h1>
            </Widget.Header>
            <Widget.Content>
              <p>
                Gostou deste Quiz? Dá uma olhada no que o pessoal da
                {'<a>Imersão React NextJs</a> já fez: '}
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
              <a
                href="https://www.alura.com.br/"
                target="__blank"
                style={{ color: 'white' }}
              >
                React da Alura
              </a>,
            ]}
          />
        </QuizContainer>
      </BackgroundImage>
      <script type="text/javascript" src="js/index.js" />
    </div>
  );
}
