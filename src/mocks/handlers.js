import { rest } from 'msw';
import { students } from './data/students';
import { groups } from './data/groups';

export const handlers = [
  rest.get('/students/:group', (req, res, ctx) => {
    if (req.params.group) {
      const group = req.params.group[1];
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
  rest.get('/groups', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        groups,
      })
    );
  }),
  rest.post('/students/search', (req, res, ctx) => {
    const matchingStudents = req.body.searchPhr
      ? students.filter((e) =>
          e.name.toLowerCase().includes(req.body.searchPhr.toLowerCase())
        )
      : [];
    return res(
      ctx.status(200),
      ctx.json({
        matchingStudents,
      })
    );
  }),
];
