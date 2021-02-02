seasons = ('Spring', 'Summer', 'Fall', 'Winter')

x = (*enumerate(seasons),)

assert x == ((0, 'Spring'), (1, 'Summer'),
             (2, 'Fall'  ), (3, 'Winter'))
