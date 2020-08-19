import React from 'react';
import { Segment, Header, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createEvent, updateEvent } from '../eventActions';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import MyTextArea from '../../../app/common/form/MyTextArea';
import MySelectInput from '../../../app/common/form/MySelectInput';
import MyDateInput from '../../../app/common/form/MyDateInput';
import { categoryData } from '../../../app/api/categoryOptions';

export default function EventForm({ match, history }) {
  const dispatch = useDispatch();
  const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.params.id));
  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    place: '',
    date: ''
  }

  const validationSchema = Yup.object({
    title: Yup.string().required('Must provide title'),
    category: Yup.string().required('Must provide a category'),
    description: Yup.string().required(),
    city: Yup.string().required(),
    place: Yup.string().required(),
    date: Yup.string().required(),
  })

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          selectedEvent
            ? dispatch(updateEvent({...selectedEvent, ...values}))
            : dispatch(
              createEvent({
                ...values,
                id: cuid(),
                hostedBy: 'Chauncey',
                attendees: [],
                hostPhotoURL: '/assets/user.png'
            })
          );
            history.push('/events');
        }}
      >
          {({isSubmitting, dirty, isValid}) => (
            <Form className='ui form'>
              <Header sub color='teal' content='Details' />
              <MyTextInput name='title' placeholder='Event title' />
              <MySelectInput
                name='category'
                placeholder='Category'
                options={categoryData}
              />
              <MyTextArea name='description' placeholder='Description' rows={3}/>
              <Header sub color='teal' content='Location Info' />
              <MyTextInput name='city' placeholder='City' />
              <MyTextInput name='place' placeholder='Place' />
              <MyDateInput
                name='date'
                placeholderText='Date'
                timeFormat='HH:mm'
                showTimeSelect
                timeCaption='time'
                dateFormat='MMMM d, yyyy h:mm a'
              />
              <Button
                loading={isSubmitting}
                disabled={!isValid || !dirty || isSubmitting}
                type='submit'
                floated='right'
                positive
                content='Submit'
              />
              <Button
                disabled={isSubmitting}
                as={Link}
                to='/events'
                type='submit'
                floated='right'
                content='Cancel'
              />
            </Form>
          )}

      </Formik>
    </Segment>
  )
}
