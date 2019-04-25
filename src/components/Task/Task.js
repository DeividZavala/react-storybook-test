import React from 'react';
import { PropTypes } from 'prop-types';

/** Checando a ver si sale la descripcion */
const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
    return (
        <div className={`list-item ${state}`}>
            <label className="checkbox">
                <input
                    type="checkbox"
                    defaultChecked={state === 'TASK_ARCHIVED'}
                    disabled={true}
                    name="checked"
                />
                <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
            </label>
            <div className="title">
                <input type="text" value={title} readOnly={true} placeholder="Input title" />
            </div>

            <div className="actions" onClick={event => event.stopPropagation()}>
                {state !== 'TASK_ARCHIVED' && (
                    <a onClick={() => onPinTask(id)}>
                        <span className={`icon-star`} />
                    </a>
                )}
            </div>
        </div>
    );
};

Task.propTypes = {
    /** la task que se mostrará*/
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
    }).isRequired,
    /** accion de archiveTask */
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func,
};

export default Task;
