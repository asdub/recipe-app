import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        minHeight: '100%',
        background: '#F0EDEE',
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      content: {
        padding: '0',
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      cardContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#F0EDEE',
        borderBottom: '2px solid #F5CAC3',
        color: '#333333',
        padding: '0.5rem',
        minHeight: '120px',
      },
      cardContentMain: {
        display: 'flex',
        flexDirection: 'column-reverse',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      },
      cardMetrics: {
        alignSelf: 'flex-end',
        padding: '0.25rem 1rem 0 0.25rem',
      },
      cardDescription: {
        
        padding: '1rem',
        color: '#333333',
      },
}))