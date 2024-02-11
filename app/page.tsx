import Link from "next/link";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export async function getData() {
  const res = await fetch("https://melivecode.com/api/attractions");
  if (!res.ok) {
    throw new Error("Fetching is failed ");
  }
  return res.json();
}

interface Attractions {
  id: number;
  name: string;
  detail: string;
  coverimage: string;
  lat: number;
  lng: number;
}

export default async function Page() {
  const data = await getData();
  console.log(data);

  return (
    <Container maxWidth="md">
      <h1>Attractions</h1>
      <Grid container spacing={2}>
        {data.map((a: Attractions) => {
          return (
            <Grid item xs={8} md={4} key={a.id}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image={a.coverimage}
                  title={a.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {a.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {a.detail}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Link href={'/' +a.id}>Click</Link>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
