import React from 'react';
import { Loader } from '../Loader';
import { Todo } from '../../types/Todo';

type Props = {
  selectedTodo: Todo | null;
};

export const TodoModal: React.FC<Props> = ({ selectedTodo }) => {
  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" />

      {true ? (
        <Loader />
      ) : (
        <div className="modal-card">
          <header className="modal-card-head">
            <div
              className="modal-card-title has-text-weight-medium"
              data-cy="modal-header"
            >
              {selectedTodo?.id}
            </div>

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type="button" className="delete" data-cy="modal-close" />
          </header>

          <div className="modal-card-body">
            <p className="block" data-cy="modal-title">
              {selectedTodo?.title}
            </p>

            <p className="block" data-cy="modal-user">
              <strong
                className={
                  selectedTodo?.completed
                    ? 'has-text-success'
                    : 'has-text-danger'
                }
              >
                {selectedTodo?.completed ? 'Done' : 'Not Done'}
              </strong>

              {' by '}

              <a href="mailto:Sincere@april.biz">{selectedTodo?.userId}</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
