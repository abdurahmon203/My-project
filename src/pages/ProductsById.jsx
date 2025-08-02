import axios from "axios";
import React, { useEffect, useState } from "react";
import { Api } from "../config/api";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  CircularProgress,
} from "@mui/material";

const ProductById = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const GetData = async () => {
    try {
      const { data } = await axios.get(`${Api}/${id}`);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  if (!data) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", paddingTop: "150px" }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3, pt: { xs: 10, md: 16 } }}>
      <Card
        variant="outlined"
        className="max-w-3xl mx-auto"
        sx={{
          p: 4,
          borderRadius: 4,
          boxShadow: 6,
          backgroundColor: "#fff",
        }}
      >
        <CardContent>
          <Box className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={data.avatar}
              alt={data.name}
              className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
            />

            <Box>
              <Typography
                variant="h4"
                fontWeight={700}
                color="primary"
                gutterBottom
              >
                👷🏻 {data.job}
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                <span className="font-semibold text-gray-800">Place:</span>{" "}
                {data.name}
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                <span className="font-semibold text-gray-800">Cost:</span> $
                {data.cost} in a month
              </Typography>

              <Typography variant="body1" color="text.secondary">
                <span className="font-semibold text-gray-800">Email:</span>{" "}
                {data.email}
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                <a
                  href={`tel:${data.phoneNumber}`}
                  className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition"
                >
                  📞 Have Call
                </a>
              </Typography>

            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductById;
