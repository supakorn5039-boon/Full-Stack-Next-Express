import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface Myparams {
  params: {
    id: string;
  };
}

export async function TestData(id: string) {
  const res = await fetch("https://melivecode.com/api/attractions/" + id);

  if (!res.ok) {
    throw new Error("Fetching is Error");
  }
  return res.json();
}

export default async function Page({ params }: Myparams) {
  const data = await TestData(params.id);
  console.log(data);

  return (
    <Container maxWidth="md">
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image={data.attraction.coverimage}
          title={data.attraction.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.attraction.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.attraction.detail}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
