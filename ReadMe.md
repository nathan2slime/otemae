<div align="center">
  <a href="#">
    <img src="https://github.com/nathan2slime/otemae/blob/master/apps/web/public/logo512.png?raw=true" alt="Otemae" width="120" height="120">
  </a>
  <h3 align="center">
  <a href="https://otemae.vercel.app/" target="_black">Otemae</a>
  </h3>

  <p align="center">
Site for anime search, being able to see their synopses and other information  </p>
</div>

### APIs

| API Name | Description                                                                                  | Documentation                            |
| -------- | -------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Jikan    | Unofficial API for MyAnimeList.net. Provides information about anime, manga, and characters. | [https://jikan.moe/](https://jikan.moe/) |

### Deployments

| Production                                                         |
| ------------------------------------------------------------------ |
| <a href="https://otemae.vercel.app/">https://otemae.vercel.app</a> |

### Required technologies

```
1. Node.js v16.16.0 (LTS)
3. Git
5. Yarn
```

### Setup

Download the repository using the following command in your terminal

```
git clone https://github.com/nathan2slime/otemae.git
```

Enter the directory and install the dependencies with yarn

```
cd otemae
```

```
yarn install
```

Create an `.env` file in the path `apps/web`, and add the environment variables. You can also copy the `.env.example` file, which is in that same directory and rename it to `.env`.

```
VITE_API_URL=https://api.jikan.moe/v4/
```

### Starting the app

Enter the `apps/web` directory or the root directory of the project and run the command below

```
yarn dev
```
