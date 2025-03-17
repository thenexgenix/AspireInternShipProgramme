import { useState, useEffect } from "react";
import collaboratorsData from "../data/collab.Icons.json";

export const useCollabIcon = () => {
  const [collabIcons, setCollabIcons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCollabIcons = () => {
      try {
        setCollabIcons(collaboratorsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCollabIcons();
  }, []);

  return { collabIcons, loading, error };
};
