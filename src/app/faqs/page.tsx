import {Box, Typography} from '@mui/material';


const faqs = [
  {
    question: "Am I going to have to pay union dues?",
    answer:
      "Union dues are established after a contract has been reached, until then, no dues will be taken from your paycheck. We are an independent union so we have full control over our own dues and our own contract. We would only charge dues if and when a contract grants us high enough benefits to cover those dues and more.",
  },
  {
    question: "What is a union?",
    answer:
      "A union is an organization formed by workers to represent their collective interests in negotiations with employers, primarily around issues like wages, benefits, working conditions, and job security.",
  },
  {
    question: "Why should I support a union?",
    answer:
      "Unions give workers the power to negotiate for better working conditions. Without unions, workers have little to no power over how their workplace is run, their benefits, or their job security. Unions hold their employers accountable and protect the rights of workers.",
  },
  {
    question: "I like Woodstocks and don’t want it to change, why do they need a union?",
    answer:
      "We don’t want it to change either! Once we have a recognized union, a legal status quo is established, which prevents Woodstocks from making significant changes to their hiring practices, benefits, and salaries without first establishing a contract. Right now, if Woodstocks were to change, the workers would have no power to dissent. With the formation of a union, we can ensure that workers get to keep the benefits they have and fight for more.",
  },
  {
    question: "Can my employer fire me for joining a union?",
    answer:
      "No, it is illegal for employers to fire or discriminate against an employee for union activities under the National Labor Relations Act (NLRA) in the United States. If you’re concerned about retaliation, having a group of coworkers on your side can make a huge difference. If more people are speaking up, it’s harder for the employer to single anyone out. Plus, there’s a collective power in numbers—employers tend to listen when they see a group of workers united in their goals.",
  },
];

export default function FAQs() {
  return (
    <div style={{ width: "100vw", height:"100vh", margin: 0 }}>
      <div style={{marginTop:"50px"}}>
        <Box sx={{display:'flex', flexDirection:'column', marginTop:"10px", justifyContent:'center', alignItems:'center', width:'100%'}}>
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Typography sx={{fontWeight:'bold', fontSize: "32px", marginBottom:"10px"}}>
              FAQs
            </Typography>
          </Box>
          {faqs.map(({ question, answer }, i) => (
            <Box key={i} sx={{ mb: 4, width: "90%"}}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {question}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {answer}
              </Typography>
            </Box>
          ))}
        </Box>
      </div>
    </div>
  );
}