import { Course } from './course';
import { dataCourses } from './dataCourses';

const seriesAvarage: HTMLElement = document.getElementById('avarage')!;

function calcularPromedioSeasons(course: Course[]) {
  const totalSeas = dataCourses.reduce(
    (sum, course) => sum + course.seasons,
    0
  );
  const promedioSeas = totalSeas / dataCourses.length;
  let promredo = Math.round(promedioSeas);
  seriesAvarage.textContent = `Seasons avarage: ${promredo}`;

  return promedioSeas;
}

calcularPromedioSeasons(dataCourses);

export const sold: number = calcularPromedioSeasons(dataCourses);
