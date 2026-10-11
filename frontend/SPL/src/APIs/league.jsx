// import { fetching } from './client';

// const saudiLeagueID = process.env.EXPO_PUBLIC_SAUDI_LEAGUE_ID ;

// export const getMatches = async () => {
//   try {
//     const response = await fetching(
//       `get_league_details?league_id=${saudiLeagueID}&season=2026/2027`
//     );

//     const matches =
//       response.data.overview.matches.allMatches.map(item => ({
//         id: item.id,
//         home: item.home.name,
//         away: item.away.name,
//       }));

//     return matches;
//   } catch (error) {
//     console.error('Failed to get matches:', error);
//     throw error;
//   }
// };