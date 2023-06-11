<script lang="ts">
	import type { UserMatch, Match } from '@prisma/client';
	export let matchPlayed: UserMatch;
	export let match: Match;
	export let user: any;

   // function pour convertir la date en format français dd/mm/yyyy hh:mm
   function formatDate(date: Date) {
        const d = new Date(date);
        const ye = new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(d);
        const mo = new Intl.DateTimeFormat('fr', { month: '2-digit' }).format(d);
        const da = new Intl.DateTimeFormat('fr', { day: '2-digit' }).format(d);
        const ho = new Intl.DateTimeFormat('fr', { hour: '2-digit' }).format(d);
        const mi = new Intl.DateTimeFormat('fr', { minute: '2-digit' }).format(d).padStart(2, '0');
        return `${da}/${mo}/${ye} à ${ho}${mi}`;
    } 

</script>

<div class="my-4 p-4 bg-gray-100 rounded-lg">
    <p class="text-lg font-semibold">{matchPlayed.result}</p>
    <p class="text-md">{match.name}</p>
    <p class="text-sm text-gray-600">Match commencé le {formatDate(match.started_at)}</p>
    {#if match.finished_at}
        <p class="text-sm text-gray-600">Match terminé le {formatDate(match.finished_at)}</p>
    {/if}
    <p class="text-sm text-gray-600">
        {match.creator_id == user.id
            ? 'Vous avez créé ce match'
            : 'Vous avez été invité à ce match'}
    </p>
</div>
