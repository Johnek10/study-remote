import { rest } from 'msw';
import { students } from './data/students';

export const handlers = [
  rest.get('/students/:group', (req, res, ctx) => {
    if (req.params.group) {
      const group = req.params.group[1];
      console.log(group);
      const groupStudents = students.filter((e) => e.group === group);
      return res(
        ctx.status(200),
        ctx.json({
          students: groupStudents,
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        students,
      })
    );
  }),
];
