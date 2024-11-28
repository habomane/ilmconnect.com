import { Skill } from "@/models";
import { SkillEndpoints } from "@/requests";

export const createSkillService = async (skill: Skill): Promise<Skill | null> => {
    const response = await fetch(SkillEndpoints.postSkill, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(skill)});
    if (response.status !== 201) {
      throw new Error(`Cannot create skill at this time.`);
    }
    return skill;
};


export const deleteSkillService = async (profileKey: string, skill: string): Promise<void> => {
    const fullApi = SkillEndpoints.deleteSkill + profileKey + "?skill=" + skill;
    const response = await fetch(fullApi, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }});
    if (response.status !== 200) {
      throw new Error(`Cannot delete skill at this time.`);
    }
};
