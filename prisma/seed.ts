import PrismaClientPkg from '@prisma/client'

// Prisma doesn't support ES Modules so we have to do this
const PrismaClient = PrismaClientPkg.PrismaClient
const prisma = new PrismaClient()



async function seed() {

    const game = await prisma.games.create({data: {name: 'Morpion'}})
    const game_id = game.id

    const user1 = await prisma.users.create({ data: { full_name: 'First personne', pseudo: 'peseudo1'} })
    const user1_id = user1.id
    const user2 = await prisma.users.create({ data: { full_name: 'Second personne', pseudo: 'peseudo2'} })
    const user2_id = user2.id

    const matchs1 = await prisma.matchs.create({ data: {name:"Name", finished_at: new Date('2023-01-01'), game_id: game_id } })
    const matchs1_id = matchs1.id

    const usermatchs1 = await prisma.usersMatchs.create({ data: { user_id: user1_id, match_id: matchs1_id, score: -1 } })
    const usermatchs1_id = usermatchs1.id
    const usermatchs2 = await prisma.usersMatchs.create({ data: { user_id: user2_id, match_id: matchs1_id, score: 1 } })
    const usermatchs2_id = usermatchs2.id

    const elo1 = await prisma.elo.create({ data: { user_id: user1_id, game_id: game_id, ranking_elo: 1000 } })
    const elo2 = await prisma.elo.create({ data: { user_id: user2_id, game_id: game_id, ranking_elo: 500 } })




}

seed()
