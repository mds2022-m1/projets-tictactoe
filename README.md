## Lancer en local

Pour lancer l'application en local, il faut tout d'abord dupliquer le fichier **env.env** et le renommer en **.env**. Cela permet de spécifier le chemin relatif à la base de données.

Pour lancer l'application en local, il est conseillé de laisser la valeur de `DATABASE_URL` à `file:./dev.db` dans le fichier `.env`. Une fois cela fait, il faut se positionner à la racine du projet et lancer les commandes suivantes :

```
npm i
npx prisma db seed
npm run dev

```

> La commande npx prisma db seed permet de remplir la base de données avec un jeu de données prédéfini.
> 

## Prisma

Le fichier *prisma/seed.ts* contient un jeu de données pouvant être inséré dans la base de données. Pour cela, il suffit d'exécuter la commande :

```
npx prisma db seed

```

Cette commande permet de remplir la base de données avec les données du jeu.

Il est également possible de générer les types Prisma à partir du modèle de la base de données en utilisant la commande suivante :

```
npx prisma generate

```


# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Prisma

Dupliquer le fichier **env.env** et renommer le en **.env**

Ce fichier contient le chemin relatif à la base de données.

Ouvrir l'interface de prisma

```bash
npx prisma studio
```

Le fichier _prisma/seed.ts_ contient un jeu de données pouvant être inséré dans la base de données.
Pour cela il faut éxecuter la commande

```bash
npx prisma db seed
```

Generer les types prisma

```bash
npx prisma generate
```
