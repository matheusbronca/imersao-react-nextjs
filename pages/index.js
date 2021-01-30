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
        <GitHubCorner projectUrl="https://github.com/matheusbronca/imersao-react-nextjs" />
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
              <p style={{marginBottom: '1.5rem'}}>
                Gostou deste Quiz? Dá uma olhada no que o pessoal da
                Imersão React Next.js já fez:
              </p>
              <ul style={{padding: '0'}}>
                {db.external.map((externalLink) => {
                  const [projectName, githubUser] = externalLink
                    .replace(/\//g, '')
                    .replace('https:', '')
                    .replace('.vercel.app', '')
                    .split('.');

                  return (
                    <li style={{listStyle: 'none', marginBottom: '.5rem', width: '100%', overflow: 'hidden'}}>
                      <Widget.CommunityLinks href={externalLink}>
                        <span style={{position: 'relative', width: '100%', display: 'block'}}>{`${githubUser}/${projectName}`}</span>
                      </Widget.CommunityLinks>
                    </li>
                  );
                })}
              </ul>
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
